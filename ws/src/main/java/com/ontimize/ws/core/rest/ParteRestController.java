package com.ontimize.ws.core.rest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ontimize.api.core.service.IParteService;
import com.ontimize.jee.server.rest.ORestController;

@RestController
@RequestMapping("/partes")
@ComponentScan(basePackageClasses = { com.ontimize.api.core.service.IParteService.class })
public class ParteRestController extends ORestController<IParteService> {
	@Autowired
	private IParteService parteService;

	@Override
	public IParteService getService() {
		return this.parteService;
	}

}
