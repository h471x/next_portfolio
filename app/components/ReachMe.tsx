const contactLinks = [
  {
    name: "Email",
    url: "mailto:hatixntsoa@proton.me",
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/hatixntsoa",
  },
  {
    name: "Discord",
    url: "https://discord.com/users/1082707265548718110",
  },
  {
    name: "GitHub",
    url: "https://github.com/h471x",
  },
];

const ReachMe = () => {
  return (
    <div>
      <h2 className="command-line">   ~ cat reachme </h2>
      <br />
      <p className="text-xl leading-[1.6]">
        Get in touch via&nbsp;
        {contactLinks.map((link, index) => (
          <span key={link.name}>
            <a
              className="social link"
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              {link.name}
            </a>
            {index < contactLinks.length - 1 ? (index === contactLinks.length - 2 ? " or " : ", ") : ""}
          </span>
        ))}
        .
      </p>
      <br /><br />
    </div>
  );
};

export default ReachMe;