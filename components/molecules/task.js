import AtomText from "../../components/atoms/text";
import AtomProgressbar from "../../components/atoms/progressBar";
import AtomButton from "../../components/atoms/button";

export default function task({value}) {
	return (
		<>
			{/* <div style={{background:"#FFFFFF", border: "1px solid #E4E4E8", borderRadius: "4px", padding:"12px 16px", margin:"10px 0"}}>
				<AtomText value="No Task Available" color="#B7BDC9"/>
			</div> */}
			<div style={{background:"#FFFFFF", border: "1px solid #E4E4E8", borderRadius: "4px", padding:"12px 16px", margin:"10px 0"}}>
				<AtomText value={value} color="#2F3136" weight="bold"/>
				<div className="row">
					<div className="col-9" style={{alignItems:"center"}}>
						<AtomProgressbar progress="75" />
					</div>
					<div className="col-3" style={{alignItems:"center", height:"25px", display:"flex"}}>
						<AtomButton icon="/images/ellipsis.png" background="none" border="none" width="25px" height="20px" topIcon="1px" />
					</div>
				</div>
			</div>
		</>
	);
}