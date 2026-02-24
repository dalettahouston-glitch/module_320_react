// Navigation bar component – fixed to avoid self-import recursion
// and provide a proper <nav> element based on props.

export default function Nav({ ariaLabel, role = "navigation", className, links = [], color }) {
  return (
    <nav
      aria-label={ariaLabel}
      role={role}
      className={className}
      style={color ? { backgroundColor: color } : undefined}
    >
      <ul>
        {links.map((link) => (
          <li key={link}>
            <a href="#">{link}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
}