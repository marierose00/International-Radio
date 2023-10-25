export const Button = ({ disabled, onClick, ...props}) => {
    const { text } = props;

    const handleClick = (e) => {
        if (disabled) {
            e.preventDefault();
            return;
        }
        onClick(e);
    };

    return (
        <button
            className="mx-4 px-4 py-2 bg-sky-700 rounded-md text-md text-white disabled:opacity-50"
            disabled={disabled}
            onClick={handleClick}
        >
            {text}
        </button>
    );
}