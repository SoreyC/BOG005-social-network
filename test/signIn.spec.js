//import { createUser } from '../src/firebase/authenticationFirebase.js';
import { signIn } from '../src/lib/page/signIn.js';
import { eventHandler } from '../src/lib/routes.js';
//import { showMessageError } from '../src/lib/utils/formValidator.js';
jest.mock('../src/firebase/authenticationFirebase.js');
jest.mock('../src/firebase/firestoreFirebase.js');

//Nuestra signIn sólo retorna la vista
//Probar los botones
describe('Testing view', ()=>{
    it('Dede mostrar correctamente la vista signIn', ()=>{
        document.body.innerHTML = '<div id="contentPageId"></div>'
        const main = document.querySelector('#contentPageId')
        main.innerHTML = signIn()
        expect(document.getElementById('submitContinueButton')).toBeTruthy();
    });
    //funcionalidad de los botones
    it('Debe responder con: Dato Incorrecto', (done) => {
        // createUser(null, '', '').catch(()=>{
        //     console.log('Catch llamado directo')
        // })
        document.body.innerHTML = '<div id="contentPageId"></div>'
        const main = document.querySelector('#contentPageId')
        main.innerHTML = signIn()
       eventHandler('/signIn') //si borras esta función igual corre el test 
       
       //signIn()
        expect(document.querySelector('#emailContent')).not.toBeNull();
        expect(document.querySelector('#paragraph1')).toBe(null);
        // showMessageError()
        expect(document.getElementById('submitContinueButton')).not.toBeNull();
        document.getElementById('submitContinueButton').click(); 
        setTimeout(()=>{ 
            expect(document.querySelector('#paragraph1')).not.toBeNull();
           done()
    },2000)
    })

    it('Invalid load html: Carga errada de las secciones html', () => {
        document.body.innerHTML = '' 
        const main = document.querySelector('#contentPageId')
        expect(main).toBeNull();
        expect(document.querySelector('#emailContent')).toBeNull();
        expect(document.querySelector('#paragraph1')).toBe(null);
        expect(document.getElementById('submitContinueButton')).toBeNull();
    })
});



