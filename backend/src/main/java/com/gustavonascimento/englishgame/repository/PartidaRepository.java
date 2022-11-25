package com.gustavonascimento.englishgame.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.gustavonascimento.englishgame.domain.Partida;

public interface PartidaRepository extends JpaRepository<Partida, Long>
{

}
