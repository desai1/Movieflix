package io.egen.rest.service;

import java.util.List;

import io.egen.rest.entity.Series;

public interface SeriesService {

	public List<Series> findAll();

	public Series findOne(String id);
	
	public Series create(Series srs);

	public Series update(String id, Series series);

	public void delete(String id);
}
