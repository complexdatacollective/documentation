---
title: Variable Types

---

The Network Canvas software supports modeling data using a standard of variety data types. Below you will find these types summarized, along with relevant information about their limitations and features.

{::options parse_block_html="true" /}
<div class="variable-definition">
## Boolean
Represents dichotomous categories with only two possible values (e.g. true/false).

**Compatible Input Controls:**

- [Toggle](../_key-concepts/input-controls.md#Toggle)

**Validation Options:** Required
</div>

{::options parse_block_html="true" /}
<div class="variable-definition">
## Categorical
These variables represent nominal categories or characteristics that have no intrinsic ordering or hierarchy (e.g. gender, nationality, etc.).

**Compatible Input Controls:**

- [Toggle Button Group](../_key-concepts/input-controls.md#Toggle-Button-Group)
- [Checkbox Group](../_key-concepts/input-controls.md#checkbox-group)

**Validation Options:** MinSelected, MaxSelected, Required
</div>

{::options parse_block_html="true" /}
<div class="variable-definition">
## Datetime
These variables represent a point in time (typically a date).

**Compatible Input Controls:**

- [Date Picker](../_key-concepts/input-controls.md#Date-Picker)
- [Relative Date Picker](../_key-concepts/input-controls.md#Relative-Date-Picker)

**Validation Options:** Required
</div>

{::options parse_block_html="true" /}
<div class="variable-definition">
## Layout
These variables store the x, y coordinates of nodes on the Sociogram normalized to a range of `[0, 1]`.

This variable type has no validation options or input controls, because it cannot be used on a [form](../_key-concepts/forms.md).
</div>

{::options parse_block_html="true" /}
<div class="variable-definition">
## Number
These variables represent integer values (e.g. age, height, etc.).

**Compatible Input Controls:**

- [Number Input](../_key-concepts/input-controls.md#Number-Input)

**Validation Options:** MaxValue, MinValue, Required
</div>

{::options parse_block_html="true" /}
<div class="variable-definition">
## Ordinal
These variables represent categories that are ordered hierarchically (e.g. frequency of contact, level of education, etc.).

**Compatible Input Controls:**

- [Likert Scale](../_key-concepts/input-controls.md#Likert-Scale)
- [Radio Group](../_key-concepts/input-controls.md#Radio-Group)

**Validation Options:** Required
</div>

{::options parse_block_html="true" /}
<div class="variable-definition">
## Scalar
These variables represent a normalized value within a scale `[0.1]` (e.g. perceived pain).

**Compatible Input Controls:**

- [Visual Analog Scale](../_key-concepts/input-controls.md#Visual-Analog-Scale)

**Validation Options:** Required
</div>

{::options parse_block_html="true" /}
<div class="variable-definition">
## Text
These variables represent text data (e.g. names, qualitative responses, etc.).

**Compatible Input Controls:**

- [Text Input](../_key-concepts/input-controls.md#Text-Input)
- [Text Area](../_key-concepts/input-controls.md#Text-Area)

**Validation Options:** MinLength, MaxLength, Required
</div>
