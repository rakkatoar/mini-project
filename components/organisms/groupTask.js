import AtomText from "../../components/atoms/text";
import AtomButton from "../../components/atoms/button";
import MoleculeMonths from "../../components/molecules/months";
import MoleculeTask from "../../components/molecules/task";

export default function nav({ startMonth, endMonth, title, titleColor, background, border, borderRadius, backgroundTitle, borderTitle, borderRadiusTitle}) {
	return (
		<>
			<div className="col-md-3 col-sm-6" style={{padding:"5px"}}>
				<div style={{ background:background, border:border, borderRadius:borderRadius, padding:"10px" }}>
					<div className="mb-2" style={{background:backgroundTitle, border:borderTitle, borderRadius:borderRadiusTitle, padding:"1px 8px", display:"table"}}>
						<AtomText value={title} color={titleColor} marginBottom="0" size="12px"/>
					</div>
					<MoleculeMonths start={startMonth} end={endMonth} size="12px" />
					<MoleculeTask value="Bundle interplanetary analytics for improved transmission"/>
					<AtomButton value="New Task" icon="/images/plusCircle.png" background="none" border="none" size="14px" display="block"/>
				</div>
			</div>
		</>
	);
}