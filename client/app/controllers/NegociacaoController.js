class NegociacaoController {

    constructor(){

        let $ = document.querySelector.bind(document)
        this._inputData = $('#data')
        this._inputQuantidade = $('#quantidade')
        this._inputValor = $('#valor')
        this._negociacoes = new Negociacoes()

        this._negociacoesView = new NegociacoesView('#negociacoes')
        this._negociacoesView.update(this._negociacoes)

        this._mensagem = new Mensagem()
        this._mensagemView = new MensagemView('#mensagem')
        this._mensagemView.update(this._mensagem)
    }

    adiciona(event){

        event.preventDefault()  

        this._negociacoes.adiciona(this._criaNegociacao())
        this._negociacoes.paraArray().length = 0
        this._negociacoesView.update(this._negociacoes)
        
        this._mensagem.texto = 'Negociação criada'
        this._mensagemView.update(this._mensagem)
        this._limpaFormulario()
    }

    _criaNegociacao(){

        return new Negociacao(
            DateConverter.stringToDate(this._inputData.value),
            this._inputQuantidade.value, 
            this._inputValor.value
        )
    }

    _limpaFormulario(){

        this._inputData.value = ''
        this._inputQuantidade.value = 1
        this._inputValor.value = 0
        this._inputData.focus()
    }
 


}