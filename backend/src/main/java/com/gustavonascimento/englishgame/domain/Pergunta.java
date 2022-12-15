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
@Table(name="pergunta")
public class Pergunta implements Serializable{

	private static final long serialVersionUID = 1L;
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	private Byte[] pergunta;
	@Column(nullable = false)
	private String alternativa1;
	@Column(nullable = false)
	private String alternativa2;
	@Column(nullable = false)
	private String certo;
	@Column(nullable = false)
	private String dificuldade;
	
	public Pergunta() 
	{
	}

	public Pergunta(Long id, Byte[] pergunta, String alternativa1, String alternativa2,
			String dificuldade, String certo) 
	{
		super();
		this.id = id;
		this.pergunta = pergunta;
		this.alternativa1 = alternativa1;
		this.alternativa2 = alternativa2;
		this.certo = certo;
		this.dificuldade = dificuldade;
	}

	public Long getId() 
	{
		return id;
	}

	public void setId(Long id) 
	{
		this.id = id;
	}

	public Byte[] getPergunta() 
	{
		return pergunta;
	}

	public void setPergunta(Byte[] pergunta) 
	{
		this.pergunta = pergunta;
	}

	public String getAlternativa1() 
	{
		return alternativa1;
	}

	public void setAlternativa1(String alternativa1) 
	{
		this.alternativa1 = alternativa1;
	}

	public String getAlternativa2() 
	{
		return alternativa2;
	}

	public void setAlternativa2(String alternativa2) 
	{
		this.alternativa2 = alternativa2;
	}

	public String getcerto() 
	{
		return certo;
	}

	public void setcerto(String certo) 
	{
		this.certo = certo;
	}

	public String getDificuldade() 
	{
		return dificuldade;
	}

	public void setDificuldade(String dificuldade)
	{
		this.dificuldade = dificuldade;
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
		Pergunta other = (Pergunta) obj;
		return Objects.equals(id, other.id);
	}
}