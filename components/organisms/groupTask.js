import AtomText from "../../components/atoms/text";
import AtomButton from "../../components/atoms/button";
import MoleculeMonths from "../../components/molecules/months";
import MoleculeTask from "../../components/molecules/task";
import MoleculeInput from "../../components/molecules/input";
import {Modal} from "react-bootstrap";
import {useState} from "react";

export default function groupTask({ startMonth, endMonth, title, titleColor, background, border, borderRadius, backgroundTitle, borderTitle, borderRadiusTitle}) {
	const [show, setShow] = useState(false);
	const [task, setTask] = useState("");
  const [progress, setProgress] = useState("");
	const handleModal = () => {
		setShow(true);
	};
	const handleClose = () => {
		setShow(false);
	};
	const handleSave = () => {
		setShow(false);
	};
	const handleChangeTask = () => {

	};
	const handleChangeProgress = () => {

	};
	return (
		<>
			<Modal
			onHide={() => setShow(false)}
      show={show}
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Body>
        <AtomText value="Create Task" size="16px" weight="700"/>
        <MoleculeInput onChange={handleChangeTask} width="100%" label="Task Name" placeholder="example. Build rocket to Mars." type="text" color="#2F3136" size="14px" weight="600" marginTop="10px" border="1px solid #E5E5E5" />
				<div style={{width:"25%"}}>
					<MoleculeInput onChange={handleChangeProgress} width="50%" label="Progress" placeholder="0%" type="text" color="#2F3136" size="14px" marginTop="5px" border="1px solid #E5E5E5" />
				</div>
				<div className="mt-5" style={{float:"right"}}>
					<AtomButton onClick={handleClose} value="Cancel" padding="5px 16px" width="auto" marginRight="10px" height="100%" border="1px solid #D9D9D9" radius="2px" background="none"/>
					<AtomButton onClick={handleSave} value="Save Task" padding="5px 16px" width="auto" height="100%" color="#FFFFFF" border="none" radius="2px" background="#27AE60" />
				</div>
      </Modal.Body>
    </Modal>
			<div className="col-md-3 col-sm-6" style={{padding:"5px"}}>
				<div style={{ background:background, border:border, borderRadius:borderRadius, padding:"10px" }}>
					<div className="mb-2" style={{background:backgroundTitle, border:borderTitle, borderRadius:borderRadiusTitle, padding:"1px 8px", display:"table"}}>
						<AtomText value={title} color={titleColor} marginBottom="0" size="12px"/>
					</div>
					<MoleculeMonths start={startMonth} end={endMonth} size="12px" />
					<MoleculeTask value="Bundle interplanetary analytics for improved transmission"/>
					<AtomButton onClick={handleModal} value="New Task" icon="/images/plusCircle.png" background="none" border="none" size="14px" display="block"/>
				</div>
			</div>
		</>
	);
}