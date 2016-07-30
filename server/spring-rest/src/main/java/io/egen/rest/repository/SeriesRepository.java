package io.egen.rest.repository;

import java.util.List;

import io.egen.rest.entity.Series;

public interface SeriesRepository {
	
	public List<Series> findAll();

	public Series findOne(String id);
	
	public Series create(Series srs);

	public Series update(Series series);

	public void delete(Series series);

}
