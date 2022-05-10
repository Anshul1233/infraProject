import { LightningElement } from 'lwc';

export default class InfraMain extends LightningElement {
    name
    flag = false

    sendHandler(){
        this.flag = true
        this.name = this.template.querySelector('lightning-input').value;
    }
}