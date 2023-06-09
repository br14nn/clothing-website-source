type ScrollButtonProps = {
	name: string;
	onClick: React.MouseEventHandler<HTMLButtonElement>;
	imgSrc: string;
};

export default function (props: ScrollButtonProps) {
	return (
		<button
			className={`hidden h-fit w-fit min-w-[16px] tablet:block`}
			name={props.name}
			aria-label={props.name}
			onClick={props.onClick}
		>
			<img className="mx-auto h-[32px] w-[16px]" src={props.imgSrc} alt="arrow" />
		</button>
	);
}
