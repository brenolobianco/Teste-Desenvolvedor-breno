<?php

namespace App\Http\Controllers;
use App\Models\Contact;
use Illuminate\Http\Request;


class ContactController extends Controller
{
    /**
     * Lista todos os contatos ja cadastrados
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return Contact::all();
    }
     /**
     * Cria um novo contato.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    
    public function store(Request $request)
    {
        $request ->validate(
            [
                'name'=>'required',
                'email'=>'required',
                'contact'=>'required',
                'image'=>'required',
                
            ]);
            return Contact::create($request -> all());
    }
    /**
     * Atualiza um contato especifico.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $contact = Contact::findOrFail($id);

        $contact->update($request->all());

        return $contact;

    }

    /**
     * Remove um contato especifico.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        return [Contact::destroy($id),'message' => 'Contato deletado com sucesso.'];
    }
}


