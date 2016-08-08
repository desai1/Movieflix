package io.egen.rest.repository;

import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.TypedQuery;

import org.springframework.stereotype.Repository;

import io.egen.rest.entity.Series;

@Repository
public class SeriesRepositoryImp implements SeriesRepository
{

	@PersistenceContext
	private EntityManager em;

	@Override
	public List<Series> findAll() {
		TypedQuery<Series> query = em.createNamedQuery("Series.findAll", Series.class);
		return query.getResultList();
	}

	@Override
	public Series findOne(String id) {
		return em.find(Series.class, id);
	}
	
	@Override
	public Series create(Series srs) {
		em.persist(srs);
		return srs;
	}
	
		@Override
	public Series update(Series series) {
		return em.merge(series);
	}

	@Override
	public void delete(Series series) {
		em.remove(series);
	}
}
