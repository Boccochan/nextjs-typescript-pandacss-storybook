type OptionProps = {
  /**
   * Hidden this option on dropdown menu.
   */
  hidden?: boolean;

  /**
   * The selected attribute.
   */
  isSelected?: boolean;

  /**
   * The id is set as 'key' of option tag.
   */
  id: string;

  /**
   * The value is shown at dropdown menu.
   */
  value: string;
};

type OptionsProps = {
  /**
   * If true, the component is disabled and show 'Loading..'.
   */
  loading?: boolean;

  /**
   * The options of the select.
   */
  options: OptionProps[];
};

export const Options = (props: OptionsProps) => {
  return props.options.map((option) => (
    <option
      key={option.id}
      hidden={option.hidden}
      value={option.value}
      selected={option.isSelected}
    >
      {option.value}
    </option>
  ));
};
