package com.gustavonascimento.englishgame.resources;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.gustavonascimento.englishgame.domain.Pergunta;
import com.gustavonascimento.englishgame.services.PerguntaService;

@RestController
@RequestMapping(value="/perguntas")
public class PerguntaResource {

	@Autowired
	private PerguntaService servicosPergunta;

	@GetMapping
	public ResponseEntity<List<Pergunta>> findAll(@RequestParam(value="dificuldade") String nivel)
	{
		List<Pergunta> find=servicosPergunta.jogo(nivel);
		return ResponseEntity.ok().body(find);
	}
}