export class sistemaAutenticacao {
    static login (autenticavel, senha){
        if(sistemaAutenticacao.eAutenticavel(autenticavel)){
            return autenticavel.autenticar(senha);
        }
        return false;
    }

    static eAutenticavel(autenticavel){
        return "autenticar" in autenticavel && 
        autenticavel.autenticar instanceof Function
    }

}