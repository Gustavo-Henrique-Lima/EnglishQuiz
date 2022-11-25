package com.gustavonascimento.englishgame.domain;

import java.io.Serializable;
import java.util.Objects;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "partidas")
public class Partida implements Serializable{
	
	private static final long serialVersionUID = 1L;
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	@Column(nullable = false)
	private String nickname;
	@Column(nullable = false)
	private Integer pontuacao;
	@Column(nullable = false,length = 7)
	private String nivel;
	
	public Partida() 
	{
	}

	public Partida(Long id, String nickname, Integer pontuacao, String nivel) 
	{
		super();
		this.id = id;
		this.nickname = nickname;
		this.pontuacao = pontuacao;
		this.nivel = nivel;
	}

	public Long getId() 
	{
		return id;
	}

	public void setId(Long id) 
	{
		this.id = id;
	}

	public String getNickname() 
	{
		return nickname;
	}

	public void setNickname(String nickname) 
	{
		this.nickname = nickname;
	}

	public Integer getPontuacao() 
	{
		return pontuacao;
	}

	public void setPontuacao(Integer pontuacao) 
	{
		this.pontuacao = pontuacao;
	}

	public String getNivel() 
	{
		return nivel;
	}

	public void setNivel(String nivel) 
	{
		this.nivel = nivel;
	}

	@Override
	public int hashCode() 
	{
		return Objects.hash(id);
	}

	@Override
	public boolean equals(Object obj) 
	{
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		Partida other = (Partida) obj;
		return Objects.equals(id, other.id);
	}
	
}