package com.ontimize.ws.core.rest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ontimize.api.core.service.IGastoService;
import com.ontimize.jee.server.rest.ORestController;

@RestController
@RequestMapping("/gastos")
@ComponentScan(basePackageClasses = { com.ontimize.api.core.service.IGastoService.class })
public class GastoRestController extends ORestController<IGastoService> {

	@Autowired
	IGastoService gastoService;

	@Override
	public IGastoService getService() {
		return this.gastoService;
	}

}
