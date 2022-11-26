package com.gustavonascimento.englishgame.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.gustavonascimento.englishgame.domain.Partida;

public interface PartidaRepository extends JpaRepository<Partida, Long>
{
	@Query(nativeQuery=true,value="SELECT * FROM partidas WHERE nivel=:lvl ORDER BY pontuacao DESC;")
	List<Partida> ranking(String lvl);
}