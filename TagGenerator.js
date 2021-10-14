function TagGenerator(props) {
    return (
        <span
            class={
                `tag is-${props.bgColor}
                has-text-weight-${props.textWeight}
                has-text-${props.textColor}
                `
            }
        >
            {props.text}
        </span>
    )
}