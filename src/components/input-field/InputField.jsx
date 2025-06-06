import styled from "styled-components";

const InputField = ({name, value, onChange, placeholder, autocomplete}) => {
    return (
        <>
            <InputStyled 
                type="text"
                name={name}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                autoComplete={autocomplete} 
            />
        </>
    );
}

const InputStyled = styled.input`
    font-size: var(--font-size-body-text);
    width: 100%;
    border: none;
    color: var(--font-color-primary);
    background-color: var(--bg-color-search);

    &::placeholder {
        color: var(--font-color-primary);
    }

    &:focus {
        outline: none;
    }
`

export { InputField };