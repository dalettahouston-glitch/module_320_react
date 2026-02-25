export default function Article({ date, title, image, alt, children }) {
  return (
    <article>
      <p className="date">{date}</p>
      <h3>{title}</h3>

      <img src={image} alt={alt} />

      <p>{children}</p>

      <a className="continue" href="#">Continue...</a>
    </article>
  );
}