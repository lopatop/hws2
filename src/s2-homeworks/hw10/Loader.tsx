import s from './Loader.module.css'

export const Loader = () => (
    <svg
        className={s.loader}
        width="50"
        height="50"
        viewBox="0 0 50 50"
        xmlns="http://www.w3.org/2000/svg"
    >
        <circle
            cx="25"
            cy="25"
            r="20"
            fill="none"
        />
    </svg>
)
