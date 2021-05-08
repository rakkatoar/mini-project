import AtomText from "../../components/atoms/text";
import AtomButton from "../../components/atoms/button";
import MoleculeMonths from "../../components/molecules/months";
import MoleculeTask from "../../components/molecules/task";
import MoleculeInput from "../../components/molecules/input";
import {Modal} from "react-bootstrap";
import {useState} from "react";


export default function GroupTask({ groupTaskId, tasks, startMonth, endMonth, title, titleColor, background, border, borderRadius, backgroundTitle, borderTitle, borderRadiusTitle}) {
	const [show, setShow] = useState(false);
  const [taskTitle, setTaskTitle] = useState("");
  const [progress, setProgress] = useState("");
	
	const handleModal = () => {
		setShow(true);
	};
	const handleClose = () => {
		setShow(false);
	};
 	async function addTask(inputName, inputProgress, groupTaskId) {
	const token="Bearer eyJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoxLCJleHAiOjE2MjA3NDgzOTJ9.J71LY6Z8bGjV1NxaymFZVCsEayAWC4AJ7DTQdhxq-Cs";
    const res = await fetch('https://todos-project-api.herokuapp.com/todos/'+groupTaskId+'/items',
		{method: 'POST',
		 headers: {
			'Authorization':token,
			'Content-Type':'application/x-www-form-urlencoded'
			},
		 body: JSON.stringify({
			 name:inputName,
			 progress_percentage:inputProgress
		 })
		});
    const data = await res.json()
    .then(function(result) {
      console.log(result);
    });
	}
	const handleSave = (e) => {
		const inputName = taskTitle;
		const inputProgress = progress;
		const groupTaskId = e.target.parentElement.className;
		addTask(inputName, inputProgress, groupTaskId)
		setShow(false);
	};
	const handleChangeTaskTitle = e => {
		setTaskTitle(e.target.value);
	};
	const handleChangeProgress = e => {
		setProgress(e.target.value);
	};
	const ConditionalWrapper = ({ children, condition }) => {
			return condition ? (
				<div style={{background:"#FFFFFF", border: "1px solid #E4E4E8", borderRadius: "4px", padding:"12px 16px", margin:"10px 0"}}>
					<AtomText value="No Task Available" color="#B7BDC9"/>
				</div>
			) : (
					children
			)
	}
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
        <MoleculeInput onChange={handleChangeTaskTitle} width="100%" label="Task Name" placeholder="example. Build rocket to Mars." type="text" color="#2F3136" size="14px" weight="600" marginTop="10px" border="1px solid #E5E5E5" />
				<div style={{width:"25%"}}>
					<MoleculeInput onChange={handleChangeProgress} width="50%" label="Progress" placeholder="0%" type="text" color="#2F3136" size="14px" marginTop="5px" border="1px solid #E5E5E5" />
				</div>
				<div className="mt-5" style={{float:"right"}}>
					<AtomButton onClick={handleClose} value="Cancel" padding="5px 16px" width="auto" marginRight="10px" height="100%" border="1px solid #D9D9D9" radius="2px" background="none"/>
					<AtomButton onClick={handleSave} groupTaskId={groupTaskId} value="Save Task" padding="5px 16px" width="auto" height="100%" color="#FFFFFF" border="none" radius="2px" background="#27AE60" />
				</div>
      </Modal.Body>
    </Modal>
			<div className="col-md-3 col-sm-6" style={{padding:"5px"}}>
				<div style={{ background:background, border:border, borderRadius:borderRadius, padding:"10px" }}>
					<div className="mb-2" style={{background:backgroundTitle, border:borderTitle, borderRadius:borderRadiusTitle, padding:"1px 8px", display:"table"}}>
						<AtomText value={title} color={titleColor} marginBottom="0" size="12px"/>
					</div>
					<MoleculeMonths start={startMonth} end={endMonth} size="12px" />
					<ConditionalWrapper condition={tasks.length < 1}>
						{tasks.map(task => (
						<MoleculeTask groupTask={title} id={task.id} title={task.name} progress={task.progress_percentage}/>
						))}
          </ConditionalWrapper>
					<AtomButton onClick={handleModal} value="New Task" icon="/images/plusCircle.png" background="none" border="none" size="14px" display="block"/>
				</div>
			</div>
		</>
	);
}

