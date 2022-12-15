package com.gustavonascimento.englishgame.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.gustavonascimento.englishgame.domain.Pergunta;

public interface PerguntaRepository extends JpaRepository<Pergunta, Long>
{
	@Query(nativeQuery=true,value="SELECT * FROM pergunta WHERE dificuldade=:nivel")
	List<Pergunta> jogo(String nivel);
}