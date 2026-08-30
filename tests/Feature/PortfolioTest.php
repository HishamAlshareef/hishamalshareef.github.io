<?php

namespace Tests\Feature;

// use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

class PortfolioTest extends TestCase
{
    public function test_portfolio_page_is_available_and_contains_featured_work(): void
    {
        $this->get('/')
            ->assertOk()
            ->assertSee('Hisham Hashem Ali Alshareef')
            ->assertSee('Miyahukum')
            ->assertSee('Water delivery, coordinated end to end.')
            ->assertSee('Built with Laravel.');
    }

    public function test_web_cv_contains_work_projects(): void
    {
        $this->get('/cv')
            ->assertOk()
            ->assertSee('Professional experience')
            ->assertSee('Miyahukum')
            ->assertSee('Payment Hub');
    }
}
