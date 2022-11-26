package com.gustavonascimento.englishgame.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.gustavonascimento.englishgame.domain.Partida;
import com.gustavonascimento.englishgame.repository.PartidaRepository;

@Service
public class PartidaService {
	
	@Autowired
	private PartidaRepository repositorioPartida;
	
	public Partida inserir(Partida obj)
	{
		return repositorioPartida.save(obj);
	}
	
	public List<Partida> ranking(String lvl)
	{
		return repositorioPartida.ranking(lvl);
	}
}