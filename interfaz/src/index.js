import "./styles/index.scss"
import Expense from "../../dominio/expense"
import Income from "../../dominio/income";
import Balance from "../../dominio/balance";
import {MDCTopAppBar} from '@material/top-app-bar';
import {MDCRipple} from '@material/ripple';
import {MDCDrawer} from "@material/drawer";
import {MDCList} from "@material/list";
import {MDCTabBar} from '@material/tab-bar';

const tabBar = new MDCTabBar(document.querySelector('.mdc-tab-bar'));
const topAppBarElement = document.querySelector('.mdc-top-app-bar');
const topAppBar = new MDCTopAppBar(topAppBarElement);
const iconButtonRipple = new MDCRipple(document.querySelector('.mdc-icon-button'));
//iconButtonRipple.unbounded = true;
const fabRipple = new MDCRipple(document.querySelector('.mdc-fab'));
const drawer = MDCDrawer.attachTo(document.querySelector('.mdc-drawer'));
const list = MDCList.attachTo(document.querySelector('.mdc-deprecated-list'));
list.wrapFocus = true;
//list 
const listItemRipples = list.listElements.map((listItemEl) => new MDCRipple(listItemEl));

// FAB 
let fabButton = document.querySelector('.mdc-fab.menu')
fabButton.addEventListener('click', (event) => {
  openFabSpeedDial(event.taget);
});

//drawer toggle from app bar
topAppBar.setScrollTarget(document.getElementById('main-content'));
topAppBar.listen('MDCTopAppBar:nav', () => {
  changeMenuIcon();
});


//close drawer on element click
const listEl = document.querySelector('.mdc-drawer .mdc-deprecated-list');
const mainContentEl = document.querySelector('.main-content');
listEl.addEventListener('click', (event) => {
  changeMenuIcon();
  var target = event.target;
  drawer.open = false;
  let appTitle = document.getElementsByClassName('mdc-top-app-bar__title')[0];
  document.getElementsByClassName('mdc-list-item--activated')[0].classList.remove("mdc-list-item--activated");
  target.classList.add("mdc-list-item--activated");
  appTitle.innerHTML = target.querySelector('.mdc-deprecated-list-item__text').innerHTML;
});






//TODO: REFACTOR THIS FUNCTION AS SOON AS POSSIBLE
function openFabSpeedDial(fabButtonMenu){
  //slide up 3 more fab buttons
  // income, expenses, QR
  // onclick close
  fabButton.classList.toggle('close')
  let income = document.querySelector('.mdc-fab.income');
  income.classList.toggle('fade-in');
  income.addEventListener('click', (event) => {
    openFabSpeedDial(fabButtonMenu);
    fabButton.classList.add('mdc-fab--exited');
  });
  let expense = document.querySelector('.mdc-fab.expense');
  expense.classList.toggle('fade-in');
  expense.addEventListener('click', (event) => {
    openFabSpeedDial(fabButtonMenu);
    fabButton.classList.add('mdc-fab--exited');
  });
}

function changeMenuIcon(){
  let iconContainer = topAppBarElement.getElementsByClassName('mdc-top-app-bar__navigation-icon')[0];
  let icon = iconContainer.innerHTML;
  iconContainer.innerHTML = (icon == 'menu') ? 'arrow_back' : 'menu';
  drawer.open = !drawer.open;
}

let contentEls = document.querySelectorAll('#history .tab-content');
tabBar.listen('MDCTabBar:activated', function(event) {
  document.querySelector('.tab-content.active').classList.remove('active');
  contentEls[event.detail.index].classList.add('active');



});

let cuenta = new Balance;
let sueldo = new Income("Sueldo",60000,"2021-10-07","UYU",true);
let sueldo2 = new Income("Sueldo2",50,"2021-10-07","UYU",true);
let sueldo3 = new Income("Sueldo2",50,"2021-10-07","UYU",true);
let renner = new Expense("renner",200,"2021-10-09","UYU","Ropa",true);
let renner2 = new Expense("renner2",200,"2021-10-09","UYU","Ropa",true);




cuenta.addIncomeToBalance(sueldo);
console.log(cuenta.getIncomeList().length);
cuenta.deleteIncomeFromList(sueldo2);
console.log(cuenta.getIncomeList().length);


// console.log(sueldo[1]);

/** preloaded test info
function logSaldo(balance){
    console.log("tu saldo actual es de: " + balance.balanceMoney);
};

let cuenta = new Balance();
logSaldo(cuenta);
let sueldo = new Income("Sueldo",60000,"2021-10-07","UYU",true);
cuenta.addIncomeToBalance(sueldo.getIncome());
logSaldo(cuenta);
let renner = new Expense("renner",200,"2021-10-09","UYU","Ropa",true);
cuenta.addExpenseToBalance(renner.getExpense());
logSaldo(cuenta);
let web = new Income("Web",20000,"2021-10-08","UYU",true);
cuenta.addIncomeToBalance(web.getIncome());
logSaldo(cuenta);
let sub = new Expense("sub",180,"2021-10-07","UYU","Ropa",true);
cuenta.addExpenseToBalance(sub.getExpense());
logSaldo(cuenta);

let history = cuenta.getIncomeList().concat(cuenta.getExpensesList());
let sortedHistory = history.sort((a,b) => a.date - b.date);
console.log(sortedHistory);


sortedHistory.forEach((element) => {
    var ul = document.getElementsByClassName('history');
    let li = document.createElement("li");
    li.appendChild(document.createTextNode(element.name +": "+ element.amount + " " + element.currency));
    ul[0].appendChild(li);
})
**/