package io.egen.rest.repository;

import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.TypedQuery;

import org.springframework.stereotype.Repository;

import io.egen.rest.entity.Movie;

@Repository
public class MovieRepositoryImp implements MovieRepository {

	
	@PersistenceContext
	private EntityManager em;

	@Override
	public List<Movie> findAll() {
		TypedQuery<Movie> query = em.createNamedQuery("Movie.findAll", Movie.class);
	
		return query.getResultList();
	}

	@Override
	public Movie findOne(String id) {
		return em.find(Movie.class, id);
	}
	
	@Override
	public Movie create(Movie mve) {
		em.persist(mve);
		return mve;
	}
	
		@Override
	public Movie update(Movie movie) {
		return em.merge(movie);
	}

	@Override
	public void delete(Movie movie) {
		em.remove(movie);
	}
}
