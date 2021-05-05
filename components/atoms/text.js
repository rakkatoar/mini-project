export default function text({ value, color, size, weight, margin, marginTop, marginBottom, display, marginRight, padding }) {
  return <p style={{ color: color, display:display, fontSize: size, fontWeight: weight, margin: margin, padding:padding, marginRight: marginRight, marginTop: marginTop, marginBottom: marginBottom }}>{value}</p>;
}