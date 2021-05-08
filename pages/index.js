import AtomText from "../components/atoms/text";
import OrganismNav from "../components/organisms/nav";
import OrganismGroupTask from "../components/organisms/groupTask";

import {useRouter} from "next/router";
import 'bootstrap/dist/css/bootstrap.min.css';

import {useState} from "react";

// export const getStaticProps = async () => {
// 	const token="Bearer eyJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoxLCJleHAiOjE2MjA3NDgzOTJ9.J71LY6Z8bGjV1NxaymFZVCsEayAWC4AJ7DTQdhxq-Cs";
// 	const res = await fetch('https://todos-project-api.herokuapp.com/todos',{method: 'GET', headers: {'Authorization':token}});
// 	const data = await res.json();
// 	return{
// 		props: {todos: data}
// 	}
// }

const index = () => {
  var groupTask1=[];
  var groupTask2=[];
  var groupTask3=[];
  var groupTask4=[];
  const groupTasks = [1,2,3,6];
  
  for(let i=0; i<groupTasks.length; i++){
    getItems(groupTasks[i]);
  }

  async function getItems(groupTaskId) {
    const token="Bearer eyJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoxLCJleHAiOjE2MjA3NDgzOTJ9.J71LY6Z8bGjV1NxaymFZVCsEayAWC4AJ7DTQdhxq-Cs";
    const res = await fetch('https://todos-project-api.herokuapp.com/todos/'+groupTaskId+'/items',{method: 'GET', headers: {'Authorization':token}});
    const data = await res.json()
    .then(function(result) {
      if(groupTaskId == 1){
        for(let i=0; i<result.length; i++){
          groupTask1.push(result[i]);
        }
      } else if(groupTaskId == 2) {
        for(let i=0; i<result.length; i++){
          groupTask2.push(result[i]);
        }
      } else if(groupTaskId == 3) {
        for(let i=0; i<result.length; i++){
          groupTask3.push(result[i]);
        }
      } else if(groupTaskId == 6) {
        for(let i=0; i<result.length; i++){
          groupTask4.push(result[i]);
        }
      }
    });
  }

  return (
    <>
      <div class="row" style={{marginRight:"0"}}>
        <div class="col-1">
          <OrganismNav />
        </div>
        <div class="col-11 mt-2">
          <AtomText value="Product Roadmap" weight="500" size="20px" padding="5px"/>
            <div className="row container mt-1" style={{maxWidth:"2000px"}}>
                <OrganismGroupTask tasks={groupTask1} title="Group Task 1" groupTaskId="1" background="#FFF9FB" backgroundTitle="#FFF0F6" borderRadius="4px" borderRadiusTitle="2px" border="1px solid #EB2F96" borderTitle="1px solid #FFADD2" titleColor="#EB2F96" startMonth="January" endMonth="March" />
                <OrganismGroupTask tasks={groupTask2} title="Group Task 2" groupTaskId="2" background="#FCFAFD" backgroundTitle="#F9F0FF" borderRadius="4px" borderRadiusTitle="2px" border="1px solid #7B61FF" borderTitle="1px solid #D3ADF7" titleColor="#7B61FF" startMonth="April" endMonth="June" />
                <OrganismGroupTask tasks={groupTask3} title="Group Task 3" groupTaskId="3" background="#F7FAFF" backgroundTitle="#F0F5FF" borderRadius="4px" borderRadiusTitle="2px" border="1px solid #2F54EB" borderTitle="1px solid #ADC6FF" titleColor="#2F54EB" startMonth="July" endMonth="September"/>
                <OrganismGroupTask tasks={groupTask4} title="Group Task 4" groupTaskId="6" background="#F8FEF1" backgroundTitle="#F6FFED" borderRadius="4px" borderRadiusTitle="2px" border="1px solid #52C41A" borderTitle="1px solid #B7EB8F" titleColor="#52C41A" startMonth="October" endMonth="December"/>
            </div>
        </div>
      </div>
    </>
  );
}

export default index;