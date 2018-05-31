import { observable, computed, action } from "mobx";
import Step from './Step'

export default class Conversation {
  @observable steps = [
    {key: "property", title:"1. Choose your property", text:"", status:"neutral"},
    {key: "offer", title:"2. Make an offer", text:"", status:"neutral"},
    {key: "insure", title:"3. Insure property", text:"", status:"neutral"},
    {key: "mortgage", title:"4. Instant mortgage", text:"", status:"neutral"},
    {key: "accept", title:"5. Offer acceptance", text:"", status:"neutral"},
    {key: "move", title:"6. Move in", text:"", status:"neutral"}
  ];

  @action
  addStep(position, key, title, text, status) {
    this.steps.splice(position, 0, new Step(key, title, text, status));
  }

  @action
  updateStep(key, text, status) {
    const stepToUpdate = this.steps.forEach((item) => {
      if(item.key === key) {
        item.text = text
        item.status = status
      }
    })
  }
}