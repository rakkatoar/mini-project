import AtomText from "../../components/atoms/text";
import AtomProgressbar from "../../components/atoms/progressBar";
import AtomButton from "../../components/atoms/button";
import MoleculeInput from "../../components/molecules/input";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // Import the FontAwesomeIcon component
import { faArrowLeft, faArrowRight, faPencilAlt, faTrash } from "@fortawesome/free-solid-svg-icons"; // import the icons you need
import {Dropdown, DropdownButton} from "react-bootstrap";
import {Modal} from "react-bootstrap";
import {useState} from "react";

export default function task({value}) {
	const [showEdit, setShowEdit] = useState(false);
	const [showDelete, setShowDelete] = useState(false);
	const handleModalEdit = () => {
		setShowEdit(true);
	};
	const handleCloseEdit = () => {
		setShowEdit(false);
	};
	const handleSaveEdit = () => {
		setShowEdit(false);
	};
	const handleChangeTaskEdit = () => {

	};
	const handleChangeProgressEdit = () => {

	};
	const handleModalDelete = () => {
		setShowDelete(true);
	};
	const handleCloseDelete = () => {
		setShowDelete(false);
	};
	const handleSaveDelete = () => {
		setShowDelete(false);
	};
	const handleChangeTaskDelete = () => {

	};
	const handleChangeProgressDelete = () => {

	};
	return (
		<>
		<style type="text/css">
						{`
							.modal-body{
								padding:30px 35px;
							}
							`}
					</style>
			<Modal
			onHide={() => setShowEdit(false)}
      show={showEdit}
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Body>
				<AtomText value="Edit Task" size="16px" weight="700"/>
				<MoleculeInput onChange={handleChangeTaskEdit} value="Test Task" width="100%" label="Task Name" placeholder="example. Build rocket to Mars." type="text" color="#2F3136" size="14px" weight="600" marginTop="10px" border="1px solid #E5E5E5" />
				<div style={{width:"25%"}}>
					<MoleculeInput onChange={handleChangeProgressEdit} value="75" width="50%" label="Progress" placeholder="0%" type="text" color="#2F3136" size="14px" marginTop="5px" border="1px solid #E5E5E5" />
				</div>
				<div className="mt-5" style={{float:"right"}}>
					<AtomButton onClick={handleCloseEdit} value="Cancel" padding="5px 16px" width="auto" marginRight="10px" height="100%" border="1px solid #D9D9D9" radius="2px" background="none"/>
					<AtomButton onClick={handleSaveEdit} value="Save Task" padding="5px 16px" width="auto" height="100%" color="#FFFFFF" border="none" radius="2px" background="#27AE60" />
				</div>
      </Modal.Body>
    </Modal>
		<Modal
			onHide={() => setShowDelete(false)}
      show={showDelete}
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Body>
				<div className="row" style={{padding:"10px"}}>
					<div className="col-1">
						<img src="/images/exclamationCircle.png"/>
					</div>
					<div className="col-11">
						<AtomText value="Delete Task" size="16px" weight="700"/>
						<AtomText value="Are you sure want to delete this task? your action can’t be reverted." size="14px" weight="400" />
					</div>
				</div>
				<div style={{float:"right"}}>
					<AtomButton onClick={handleCloseDelete} value="Cancel" padding="5px 16px" width="auto" marginRight="10px" height="100%" border="1px solid #D9D9D9" radius="2px" background="none"/>
					<AtomButton onClick={handleSaveDelete} value="Delete" padding="5px 16px" width="auto" height="100%" color="#FFFFFF" border="none" radius="2px" background="#EB5757" />
				</div>
      </Modal.Body>
    </Modal>
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
					<style type="text/css">
						{`
							.btn{
								background:none;
								border:none;
								padding:0;
							}
							.show>.btn-primary.dropdown-toggle:focus{
								-webkit-box-shadow:none;
								box-shadow:none;
							}
							.btn-primary:focus	{
								background:none;
								border:none;
								-webkit-box-shadow:none;
								box-shadow:none;
							}
							.btn:hover {
								background:none;
							}
							.dropdown-toggle::after{
								display:none;
							}
							.btn-primary:not(:disabled):not(.disabled):active, .show>.btn-primary.dropdown-toggle{
								background:#F2F2F2;
								border:none;
							}
							.dropdown-item:hover{
								background:#F5F0FC;
							}
							.dropdown-item:not(:disabled):not(.disabled):active{
								color:#5E20B3;
							}
							`}
					</style>
					<DropdownButton id="dropdown-item-button" title={<img src="/images/ellipsis.png"/>}>
						<div style={{fontSize:"14px"}}>
						<Dropdown.Item as="button"><FontAwesomeIcon icon={faArrowLeft}/><AtomText value="Move Left" size="14px" marginLeft="15px" display="inline-block" marginBottom="0"/></Dropdown.Item>
						<Dropdown.Item as="button"><FontAwesomeIcon icon={faArrowRight}/><AtomText value="Move Right" size="14px" marginLeft="15px" display="inline-block" marginBottom="0"/></Dropdown.Item>
						<Dropdown.Item as="button" onClick={handleModalEdit}><FontAwesomeIcon icon={faPencilAlt}/><AtomText value="Edit" size="14px" marginLeft="15px" display="inline-block" marginBottom="0"/></Dropdown.Item>
						<Dropdown.Item as="button" onClick={handleModalDelete}><FontAwesomeIcon icon={faTrash}/><AtomText value="Delete" size="14px" marginLeft="15px" display="inline-block" marginBottom="0"/></Dropdown.Item>
						</div>
					</DropdownButton>
						{/* <AtomButton icon="/images/ellipsis.png" background="none" border="none" width="25px" height="20px" topIcon="1px" /> */}
					</div>
				</div>
			</div>
		</>
	);
}