export default function BlogPost({ label, title, subtitle, img }) {
    return (
        <article className="post-card">
            {label && <span className="label">{label}</span>}
            <img src={img} alt={title} className="post-img" />
            <h2 className="post-title">{title}</h2>
            <p className="post-subtitle">{subtitle}</p>
            <a href="#" className="continue">continues...</a>
        </article>
    );
}