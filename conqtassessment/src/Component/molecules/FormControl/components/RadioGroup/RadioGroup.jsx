import React from "react";
import { Field, ErrorMessage } from "formik";
import { FormControlLabel, RadioGroup as MUIRadioGroup, Radio } from "@material-ui/core";
import FormControl from "@material-ui/core/FormControl";
import FormHelperText from "@material-ui/core/FormHelperText";

const RadioGroup = ({ label, name, options, ...rest }) => {
  return (
    <FormControl error>
      <Field name={name}>
        {({ field, form }) => (
          <MUIRadioGroup
            {...field}
            {...rest}
            aria-label={label}
            name={name}
            onChange={(event) => {
              form.setFieldValue(name, event.target.value);
            }}
          >
            {options.map((option) => (
              <FormControlLabel
                key={option.value}
                value={option.value}
                control={<Radio />}
                label={option.label}
              />
            ))}
          </MUIRadioGroup>
        )}
      </Field>
      <ErrorMessage name={name} component={FormHelperText} />
    </FormControl>
  );
};

export default RadioGroup;
