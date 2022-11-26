package com.gustavonascimento.englishgame.resources;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.gustavonascimento.englishgame.domain.Partida;
import com.gustavonascimento.englishgame.services.PartidaService;

@RestController
@RequestMapping(value="/ranking")
public class PartidaResource {

	@Autowired
	private PartidaService servicosPartida;
	
	@GetMapping
	public ResponseEntity<List<Partida>> ranking(@RequestParam(value="lvl",defaultValue = "Easy") String lvl)
	{
		List<Partida> partidas=servicosPartida.ranking(lvl);
		return ResponseEntity.ok().body(partidas);
	}
}