import { InputGroup, FormControl } from 'react-bootstrap';
export default function form_input({ label, value, type, color, size, marginTop, weight, rows, onChange, border, placeholder, width }) {
  return (
    <>
			<label style={{color:"#5D6372", marginTop:marginTop, fontWeight:"400"}}>{label}</label>
			<InputGroup>
			<style type="text/css">
						{`
							.form-control{
								color:#2F3136;
								width:${width};
							}
							.form-control::placeholder {
								color: #E5E5E5;
							}
							
							.form-control:-ms-input-placeholder { /* Internet Explorer 10-11 */
								color: #E5E5E5;
							}
							
							.form-control::-ms-input-placeholder { /* Microsoft Edge */
								color: #E5E5E5;
							}
							`}
					</style>
				<FormControl variant="custom" value={value} style={{border:border, color:color, fontSize:size, fontWeight:weight}} onChange={onChange} aria-describedby="basic-addon3" type={type} rows={rows} placeholder={placeholder}/>
			</InputGroup>
    </>
  );
}