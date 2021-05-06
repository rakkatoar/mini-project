export default function text({ value, color, size, weight, margin, marginTop, marginBottom, display, marginLeft, marginRight, padding }) {
  return <p style={{ color: color, display:display, fontSize: size, fontWeight: weight, margin: margin, padding:padding, marginLeft:marginLeft, marginRight: marginRight, marginTop: marginTop, marginBottom: marginBottom }}>{value}</p>;
}