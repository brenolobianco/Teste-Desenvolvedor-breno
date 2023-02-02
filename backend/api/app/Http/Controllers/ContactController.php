<?php

namespace App\Http\Controllers;

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
}
