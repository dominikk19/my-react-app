const InputWrapper = ({
                          name,
                          label,
                          value,
                          type,
                          onChange,
                      }) => {
    return (
        <p>
            <label htmlFor={name}>{label}</label>
            <input
                onChange={onChange}
                value={value}
                type={type}
                id={name}
            />
        </p>
    );
};

export default InputWrapper;