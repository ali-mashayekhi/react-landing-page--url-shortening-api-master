function Button(props) {
  return (
    <a
      href={props.btnHref}
      className="hover:bg-cyan-custom-tint flex h-[3.5625rem] w-[12.3125rem] items-center justify-center  rounded-full bg-cyan-custom text-lg font-semibold text-white transition-all duration-300"
    >
      {props.children}
    </a>
  );
}

export default Button;
