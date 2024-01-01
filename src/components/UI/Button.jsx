function Button(props) {
  return (
    <a
      href={props.btnHref}
      className="flex h-[3.5625rem] w-[12.3125rem] items-center  justify-center rounded-full bg-cyan-custom text-lg font-semibold text-white"
    >
      {props.children}
    </a>
  );
}

export default Button;
