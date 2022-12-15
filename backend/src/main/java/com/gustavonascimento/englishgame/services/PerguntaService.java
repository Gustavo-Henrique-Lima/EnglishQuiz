package com.gustavonascimento.englishgame.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.gustavonascimento.englishgame.domain.Pergunta;
import com.gustavonascimento.englishgame.repository.PerguntaRepository;

@Service
public class PerguntaService {
	
	@Autowired
	private PerguntaRepository repositorioPergunta;
	
	public List<Pergunta> jogo(String nivel)
	{
		return repositorioPergunta.jogo(nivel);
	}
}