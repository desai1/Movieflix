package io.egen.rest.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import io.egen.rest.entity.Movie;
import io.egen.rest.exception.MovieNotFoundException;
import io.egen.rest.repository.MovieRepository;

@Service
public class MovieServiceImp implements MovieService{

	@Autowired
	MovieRepository repository;

	@Override
	public List<Movie> findAll() {
		return repository.findAll();
	}

	@Override
	public Movie findOne(String id) {
		Movie existing = repository.findOne(id);
		if (existing == null) {
			throw new MovieNotFoundException("Movie with id:" + id + " not found");
		}
		return existing;
	}
	
	@Override
	@Transactional
	public Movie create(Movie mve) {
		
		return repository.create(mve);
	}

	@Override
	@Transactional
	public Movie update(String id, Movie movie) {
		Movie existing = repository.findOne(id);
		if (existing == null) {
			throw new MovieNotFoundException("Movie with id:" + id + " not found");
		}
		return repository.update(movie);
	}

	@Override
	@Transactional
	public void delete(String id) {
		Movie existing = repository.findOne(id);
		if (existing == null) {
			throw new MovieNotFoundException("Movie with id:" + id + " not found");
		}
		repository.delete(existing);
	}
}
