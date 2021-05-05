import AtomText from "../../components/atoms/text";

export default function months({ start, end, size }) {
	return (
		<>
			<AtomText value={start} weight="bold" display="inline" size={size}/>
			<AtomText value=" - " weight="bold" display="inline" size={size}/>
			<AtomText value={end} weight="bold" display="inline" size={size}/>
		</>
	);
}