import AtomText from "../components/atoms/text";
import OrganismNav from "../components/organisms/nav";
import OrganismGroupTask from "../components/organisms/groupTask";

import {useRouter} from "next/router";
import 'bootstrap/dist/css/bootstrap.min.css';

import {useState} from "react";

export default function index() {
  return (
    <>
      <div class="row" style={{marginRight:"0"}}>
        <div class="col-1">
          <OrganismNav />
        </div>
        <div class="col-11 mt-2">
          <AtomText value="Product Roadmap" weight="500" size="20px" padding="5px"/>
            <div className="row container mt-1" style={{maxWidth:"2000px"}}>
                <OrganismGroupTask title="Group Task 1" background="#FFF9FB" backgroundTitle="#FFF0F6" borderRadius="4px" borderRadiusTitle="2px" border="1px solid #EB2F96" borderTitle="1px solid #FFADD2" titleColor="#EB2F96" startMonth="January" endMonth="March" />
                <OrganismGroupTask title="Group Task 2" background="#FCFAFD" backgroundTitle="#F9F0FF" borderRadius="4px" borderRadiusTitle="2px" border="1px solid #7B61FF" borderTitle="1px solid #D3ADF7" titleColor="#7B61FF" startMonth="April" endMonth="June" />
                <OrganismGroupTask title="Group Task 3" background="#F7FAFF" backgroundTitle="#F0F5FF" borderRadius="4px" borderRadiusTitle="2px" border="1px solid #2F54EB" borderTitle="1px solid #ADC6FF" titleColor="#2F54EB" startMonth="July" endMonth="September"/>
                <OrganismGroupTask title="Group Task 4" background="#F8FEF1" backgroundTitle="#F6FFED" borderRadius="4px" borderRadiusTitle="2px" border="1px solid #52C41A" borderTitle="1px solid #B7EB8F" titleColor="#52C41A" startMonth="October" endMonth="December"/>
            </div>
        </div>
      </div>
    </>
  );
}
