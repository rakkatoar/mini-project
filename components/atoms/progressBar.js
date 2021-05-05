import {ProgressBar} from "react-bootstrap";
import AtomText from "../../components/atoms/text";

export default function text({ progress }) {
  return (
				progress == "100" ? (
					<>
						<style type="text/css">
						{`
							.progress {
								background-color: ##52C41A;
								border-radius: 8px;
								height:10px;
							}
							.progress-bar {
								background-color: #1890FF;
								color: white;
								border-radius: 8px;
							}
							`}
					</style>
					<ProgressBar now={progress} variant="custom" style={{display:"inline-flex", width:"50%", marginRight:"10px"}}/>
					<img src="/images/checkCircle.png"/>
				</>
			) : (
				<>
						<style type="text/css">
						{`
							.progress {
								background-color: #F5F5F5;
								border-radius: 8px;
								height:10px;
							}
							.progress-bar {
								background-color: #1890FF;
								color: white;
								border-radius: 8px;
							}
						`}
					</style>
						<ProgressBar now={progress} variant="custom" style={{display:"inline-flex", width:"50%", marginRight:"10px"}}/>
						<AtomText value={`${progress}%`} color="#8C8C8C" size="12px" display="inline-flex" marginBottom="0"/>
			</>
			)
	);
}