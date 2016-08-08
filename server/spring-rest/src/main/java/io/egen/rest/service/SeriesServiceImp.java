package io.egen.rest.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import org.springframework.transaction.annotation.Transactional;

import io.egen.rest.entity.Series;
import io.egen.rest.exception.SeriesNotFoundException;
import io.egen.rest.repository.SeriesRepository;

@Service
public class SeriesServiceImp implements SeriesService{

	
	@Autowired
	SeriesRepository repository;

	@Override
	public List<Series> findAll() {
		return repository.findAll();
	}

	@Override
	public Series findOne(String id) {
		Series existing = repository.findOne(id);
		if (existing == null) {
			throw new SeriesNotFoundException("Series with id:" + id + " not found");
		}
		return existing;
	}
	
	@Override
	@Transactional
	public Series create(Series srs) {
		
		return repository.create(srs);
	}

	@Override
	@Transactional
	public Series update(String id, Series series) {
		Series existing = repository.findOne(id);
		if (existing == null) {
			throw new SeriesNotFoundException("Series with id:" + id + " not found");
		}
		return repository.update(series);
	}

	@Override
	@Transactional
	public void delete(String id) {
		Series existing = repository.findOne(id);
		if (existing == null) {
			throw new SeriesNotFoundException("Series with id:" + id + " not found");
		}
		repository.delete(existing);
	}
}
