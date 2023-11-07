'use client';

import { Button } from '@/components/ui/button';
import {
  CommandDialog,
  CommandGroup,
  CommandList,
  CommandSeparator,
} from '@/components/ui/command';
import { algolia_client } from '@/lib/algolia-client.mjs';
import { useTranslations } from 'next-intl';
import { useEffect, useState } from 'react';
import { Hits, InstantSearch } from 'react-instantsearch';
import CustomSearchBox from './CustomSearchBox';
import EmptyQueryBoundary from './EmptyQueryBoundary';
import Hit from './Hit';
import NoResultsBoundary from './NoResultsBoundary';
import { DialogContextProvider } from './Provider/DialogContext';
import { env } from '@/env.mjs';

export default function SearchCommand() {
  const [open, setOpen] = useState(false);
  const t = useTranslations('SearchCommand');

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };

    document.addEventListener('keydown', down);
    return () => document.removeEventListener('keydown', down);
  }, [setOpen]);

  return (
    <DialogContextProvider open={open} setOpen={setOpen}>
      <InstantSearch
        searchClient={algolia_client}
        indexName={env.NEXT_PUBLIC_ALGOLIA_INDEX_NAME}
        insights={true}
      >
        <Button
          className="flex min-w-[250px] items-center justify-between gap-1 px-2 text-left"
          variant={'secondary'}
          onClick={() => setOpen(true)}
        >
          <span>{t('searchPlaceholder')}</span>
          <span className="rounded-lg bg-white p-2 text-xs dark:bg-slate-900">
            Ctrl+K
          </span>
        </Button>

        <CommandDialog open={open} onOpenChange={setOpen}>
          <CustomSearchBox placeholder={t('searchPlaceholder')} />
          <CommandSeparator />

          <CommandList>
            <NoResultsBoundary noResultForTxt={t('searchNoResultsFor')} />
            <CommandGroup>
              <EmptyQueryBoundary noResultTxt={t('searchNoResults')}>
                <Hits hitComponent={Hit} />
              </EmptyQueryBoundary>
            </CommandGroup>
          </CommandList>
        </CommandDialog>
      </InstantSearch>
    </DialogContextProvider>
  );
}